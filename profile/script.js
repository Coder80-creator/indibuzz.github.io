document.addEventListener("DOMContentLoaded", function() {
    const photosData = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"];
    const videosData = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4"];
    const memoriesData = ["memory1.jpg", "memory2.jpg", "memory3.jpg", "memory4.jpg", "memory5.jpg", "memory6.jpg"];
    const collectionData = ["item1.jpg", "item2.jpg", "item3.jpg", "item4.jpg", "item5.jpg", "item6.jpg"];
    const archivesData = ["archive1.pdf", "archive2.pdf", "archive3.pdf", "archive4.pdf", "archive5.pdf", "archive6.pdf"];

    function loadMoreItems(data, containerId) {
        const container = document.getElementById(containerId);
        const loadMoreBtn = container.querySelector(".load-more-btn");
        const mediaGallery = container.querySelector(".media-gallery");
        const maxItems = 3;
        let currentIndex = 0;

        function loadItems() {
            for (let i = currentIndex; i < currentIndex + maxItems && i < data.length; i++) {
                const media = createMediaElement(data[i], data[i].endsWith("jpg") ? "image" : "video");
                mediaGallery.appendChild(media);
            }
            currentIndex += maxItems;
            if (currentIndex >= data.length) {
                loadMoreBtn.style.display = "none";
            }
        }

        loadMoreBtn.addEventListener("click", loadItems);
        loadItems();
    }

    function createMediaElement(src, type) {
        const element = type === "image" ? document.createElement("img") : document.createElement("video");
        element.src = src;
        element.controls = true;
        return element;
    }

    function slideshow(containerId) {
        const container = document.getElementById(containerId);
        const mediaItems = container.querySelectorAll(".media-gallery > *");
        let currentIndex = 0;

        function showItems(startIndex) {
            for (let i = 0; i < mediaItems.length; i++) {
                if (i >= startIndex && i < startIndex + 3) {
                    mediaItems[i].style.display = "block";
                } else {
                    mediaItems[i].style.display = "none";
                }
            }
        }

        function nextItems() {
            if (currentIndex + 3 < mediaItems.length) {
                currentIndex += 3;
                showItems(currentIndex);
            }
        }

        function prevItems() {
            if (currentIndex - 3 >= 0) {
                currentIndex -= 3;
                showItems(currentIndex);
            }
        }

        showItems(currentIndex);

        const prevBtn = container.querySelector("#prev" + containerId.charAt(0).toUpperCase() + containerId.slice(1) + "Btn");
        const nextBtn = container.querySelector("#next" + containerId.charAt(0).toUpperCase() + containerId.slice(1) + "Btn");

        prevBtn.addEventListener("click", prevItems);
        nextBtn.addEventListener("click", nextItems);
    }

    loadMoreItems(photosData, "photos-gallery");
    loadMoreItems(videosData, "videos-gallery");
    loadMoreItems(memoriesData, "memories-gallery");
    loadMoreItems(collectionData, "collection-gallery");
    loadMoreItems(archivesData, "archives-gallery");

    slideshow("photos-gallery");
    slideshow("videos-gallery");
    slideshow("memories-gallery");
    slideshow("collection-gallery");
    slideshow("archives-gallery");
});
