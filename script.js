document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
        // إضافة تعليق جديد
        document.getElementById("submitComment").addEventListener("click", function () {
            let commentText = document.getElementById("commentInput").value;
            if (commentText.trim() !== "") {
                let commentBox = document.createElement("div");
                commentBox.className = "alert alert-secondary mt-2";
                commentBox.textContent = commentText;
                document.getElementById("comments").appendChild(commentBox);
                document.getElementById("commentInput").value = "";
            }
        });
    });

    document.getElementById("subscribeBtn").addEventListener("click", function () {
        let email = document.getElementById("emailInput").value;
        if (email.includes("@")) {
            alert("تم الاشتراك بنجاح! ✅");
            document.getElementById("emailInput").value = "";
        } else {
            alert("يرجى إدخال بريد إلكتروني صالح! ❌");
        }
    });
    // تأثير عند تحميل الصفحة
    document.body.style.opacity = "1";
    document.body.style.transition = "opacity 0.5s ease-in-out";

    // تغيير لون شريط التنقل عند التمرير للأسفل
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#222";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });

    // تأثير جميل عند تمرير المؤشر على المقالات
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.07)";
        });
        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
        });
    });
});