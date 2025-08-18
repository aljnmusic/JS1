import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA-WrZ6hS35vXo4OwgmgzxmpJQuf1QKJdo",
    authDomain: "notescloud-d8d47.firebaseapp.com",
    projectId: "notescloud-d8d47",
    storageBucket: "notescloud-d8d47.appspot.com",
    messagingSenderId: "852197125275",
    appId: "1:852197125275:web:8b32da22fe46b2406d2a3e"
};


// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Cloudinary info
const cloudName = "drrtevw5u";
const uploadPreset = "notescloud_unsigned";

let formEl = document.getElementById('form')
let searchInputEl = document.getElementById('search-input')
let submitBtn = document.getElementById('submit-button')
let resultContainerEl = document.getElementById('result-container')

formEl.addEventListener('submit', async (event)=>{
    event.preventDefault();

    const keyword = searchInputEl.value.trim().toLowerCase()

    if(!keyword){
        await loadInitialData()
        return
    }

    const collectionRef = collection(db, "notes");
    const snapshot = await getDocs(collectionRef);
    const results = [];

    snapshot.forEach(doc => {
        results.push(doc.data());
    });

    const filtered = results.filter(item => {
        const title = item.topicTitle?.toLowerCase() || ""
        const course = item.courseCode?.toLowerCase() || ""
        return title.includes(keyword) || course.includes(keyword)
    })

    renderResults(filtered)
})

document.addEventListener("DOMContentLoaded", async() => {
    await loadInitialData()
})

async function loadInitialData() {
    const collectionRef = collection(db, "notes")

    try{
        const snapshot = await getDocs(collectionRef)
        const result = []

        snapshot.forEach(doc => {
            result.push(doc.data())
        })

        renderResults(result)

    } catch (error) {
        console.log(error)
    }
}


function downloadFile(url, filename) {
    const downloadUrl = url.replace('raw/upload/', '/upload/fl_attachment/');
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.setAttribute('download', filename);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

function addDownloadFlag(url) {
    // Ensure URL is correctly formatted for download
    if (url.endsWith(".pdf")) {
        return url.replace('/raw/upload/', '/upload/fl_attachment/');
    }
    return url;
}

function renderResults(notes) {
    let html = '';

    notes.forEach(data => {
        const fileURL = data.fileURL;
        const isImage = /\.(jpg|jpeg|png|gif)$/i.test(fileURL);
        const isPdf = fileURL.endsWith(".pdf");
        const title = data.topicTitle || "Untitled";
        const course = data.courseCode || "N/A";
        const createdAt = data.createdAt?.toDate?.().toLocaleString() || "";
        const filename = `${title}-${course}.${fileURL.split('.').pop()}`;

        html += `
            <div class="p-4 border rounded mb-4 shadow-sm bg-white">
                <h3 class="text-lg font-semibold mb-1">${title} (${course})</h3>
                <p class="text-sm text-gray-500 mb-2">${createdAt}</p>
                
                ${isImage
            ? `<img src="${fileURL}" alt="${title}" style="max-width: 100%; height: auto; display: block; border-radius: 0.5rem;" />
                    <br />
                    <a href="${fileURL}" target="_blank" class="text-blue-600 underline mt-2 inline-block">📥 Download Image</a>`
            : isPdf
                ? `
                    <iframe src="https://docs.google.com/gview?url=${fileURL}&embedded=true" width="100%" height="500px" class="mb-2 border"></iframe>
                    <a href="${addDownloadFlag(fileURL)}" download class="text-blue-600 underline">📥 Download PDF</a>`
                : `<a href="${fileURL}" download class="text-blue-600 underline">📥 Download File</a>`
        }
            </div>
        `;
    });

    resultContainerEl.innerHTML = html;
}




