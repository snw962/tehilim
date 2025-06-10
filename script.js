document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.text-section input[type="checkbox"]');
    const resetButton = document.getElementById('resetButton'); // קבלת הפניה לכפתור האיפוס

    // טעינת מצב תיבות הסימון מהזיכרון המקומי
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'checked') {
            checkbox.checked = true;
        }
    });

    // שמירת מצב תיבות הסימון בזיכרון המקומי בעת שינוי
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                localStorage.setItem(checkbox.id, 'checked');
            } else {
                localStorage.removeItem(checkbox.id); 
            }
        });
    });

    // טיפול בלחיצה על כפתור האיפוס
    resetButton.addEventListener('click', () => {
        // לולאה על כל תיבות הסימון וביטול הסימון שלהן
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // מבטל את הסימון ויזואלית בדף
            localStorage.removeItem(checkbox.id); // מוחק את המצב השמור מ-localStorage
        });
        alert('כל הסימונים אופסו!'); // הודעה למשתמש
    });
});