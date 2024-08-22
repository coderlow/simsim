document.addEventListener('DOMContentLoaded', () => {
    // Калькулятор
    const form = document.getElementById('date-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const startDate = new Date(document.getElementById('start-date').value);
            const daysToAdd = parseInt(document.getElementById('days-to-add').value);
            if (isNaN(startDate.getTime()) || isNaN(daysToAdd)) {
                alert('Будь ласка, введіть коректні дані.');
                return;
            }
            const resultDate = new Date(startDate);
            resultDate.setDate(resultDate.getDate() + daysToAdd);
            document.getElementById('result').textContent = `Майбутня дата: ${resultDate.toISOString().split('T')[0]}`;
        });
    }
});

