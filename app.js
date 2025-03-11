document.addEventListener('DOMContentLoaded', function() {
    const ramazanData = [
        { date: "1-Ramazon, 2025", gregorian: "1-Mart, 2025", weekday: "Shanba", saharlik: "05:40", iftorlik: "18:17" },
        { date: "2-Ramazon, 2025", gregorian: "2-Mart, 2025", weekday: "Yakshanba", saharlik: "05:38", iftorlik: "18:18" },
        { date: "3-Ramazon, 2025", gregorian: "3-Mart, 2025", weekday: "Dushanba", saharlik: "05:37", iftorlik: "18:19" },
        { date: "4-Ramazon, 2025", gregorian: "4-Mart, 2025", weekday: "Seshanba", saharlik: "05:35", iftorlik: "18:20" },
        { date: "5-Ramazon, 2025", gregorian: "5-Mart, 2025", weekday: "Chorshanba", saharlik: "05:33", iftorlik: "18:21" },
        { date: "6-Ramazon, 2025", gregorian: "6-Mart, 2025", weekday: "Payshanba", saharlik: "05:32", iftorlik: "18:22" },
        { date: "7-Ramazon, 2025", gregorian: "7-Mart, 2025", weekday: "Juma", saharlik: "05:30", iftorlik: "18:24" },
        { date: "8-Ramazon, 2025", gregorian: "8-Mart, 2025", weekday: "Shanba", saharlik: "05:29", iftorlik: "18:25" },
        { date: "9-Ramazon, 2025", gregorian: "9-Mart, 2025", weekday: "Yakshanba", saharlik: "05:27", iftorlik: "18:26" },
        { date: "10-Ramazon, 2025", gregorian: "10-Mart, 2025", weekday: "Dushanba", saharlik: "05:25", iftorlik: "18:27" },
        { date: "11-Ramazon, 2025", gregorian: "11-Mart, 2025", weekday: "Seshanba", saharlik: "05:24", iftorlik: "18:28" },
        { date: "12-Ramazon, 2025", gregorian: "12-Mart, 2025", weekday: "Chorshanba", saharlik: "05:22", iftorlik: "18:29" },
        { date: "13-Ramazon, 2025", gregorian: "13-Mart, 2025", weekday: "Payshanba", saharlik: "05:20", iftorlik: "18:30" },
        { date: "14-Ramazon, 2025", gregorian: "14-Mart, 2025", weekday: "Juma", saharlik: "05:18", iftorlik: "18:32" },
        { date: "15-Ramazon, 2025", gregorian: "15-Mart, 2025", weekday: "Shanba", saharlik: "05:17", iftorlik: "18:33" },
        { date: "16-Ramazon, 2025", gregorian: "16-Mart, 2025", weekday: "Yakshanba", saharlik: "05:15", iftorlik: "18:34" },
        { date: "17-Ramazon, 2025", gregorian: "17-Mart, 2025", weekday: "Dushanba", saharlik: "05:13", iftorlik: "18:35" },
        { date: "18-Ramazon, 2025", gregorian: "18-Mart, 2025", weekday: "Seshanba", saharlik: "05:12", iftorlik: "18:36" },
        { date: "19-Ramazon, 2025", gregorian: "19-Mart, 2025", weekday: "Chorshanba", saharlik: "05:10", iftorlik: "18:37" },
        { date: "20-Ramazon, 2025", gregorian: "20-Mart, 2025", weekday: "Payshanba", saharlik: "05:08", iftorlik: "18:38" },
        { date: "21-Ramazon, 2025", gregorian: "21-Mart, 2025", weekday: "Juma", saharlik: "05:06", iftorlik: "18:39" },
        { date: "22-Ramazon, 2025", gregorian: "22-Mart, 2025", weekday: "Shanba", saharlik: "05:04", iftorlik: "18:40" },
        { date: "23-Ramazon, 2025", gregorian: "23-Mart, 2025", weekday: "Yakshanba", saharlik: "05:03", iftorlik: "18:41" },
        { date: "24-Ramazon, 2025", gregorian: "24-Mart, 2025", weekday: "Dushanba", saharlik: "05:01", iftorlik: "18:42" },
        { date: "25-Ramazon, 2025", gregorian: "25-Mart, 2025", weekday: "Seshanba", saharlik: "04:59", iftorlik: "18:44" },
        { date: "26-Ramazon, 2025", gregorian: "26-Mart, 2025", weekday: "Chorshanba", saharlik: "04:57", iftorlik: "18:45" },
        { date: "27-Ramazon, 2025", gregorian: "27-Mart, 2025", weekday: "Payshanba", saharlik: "04:55", iftorlik: "18:46" },
        { date: "28-Ramazon, 2025", gregorian: "28-Mart, 2025", weekday: "Juma", saharlik: "04:54", iftorlik: "18:47" },
        { date: "29-Ramazon, 2025", gregorian: "29-Mart, 2025", weekday: "Shanba", saharlik: "04:52", iftorlik: "18:48" },
        { date: "30-Ramazon, 2025", gregorian: "30-Mart, 2025", weekday: "Yakshanba", saharlik: "04:50", iftorlik: "18:49" }
    ];

    const calendar = document.getElementById('calendar');

    ramazanData.forEach((day, index) => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.setAttribute('data-weekday', day.weekday);
        dayElement.setAttribute('data-day', index + 1);
        dayElement.innerHTML = `
            <div class="date">
                <div class="hijri">${day.date}</div>
                <div class="gregorian">${day.gregorian}</div>
                <div class="weekday">${day.weekday}</div>
            </div>
            <div class="times">
                <div class="time saharlik">
                    <strong>Saharlik:</strong><br>
                    ${day.saharlik}
                </div>
                <div class="time iftorlik">
                    <strong>Iftorlik:</strong><br>
                    ${day.iftorlik}
                </div>
            </div>
            <div class="duas">
                <div class="dua saharlik-dua">
                    <h4>Saharlik duosi:</h4>
                    <p class="arabic">نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرَ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ، خَالِصاً لِلهِ تَعَالَى</p>
                    <p class="latin">Navaytu an asuma sovma shahri ramazona minal fajri ilal mag'ribi, xolisan lillahi ta'ala. Allohu akbar.</p>
                </div>
                <div class="dua iftorlik-dua">
                    <h4>Iftorlik duosi:</h4>
                    <p class="arabic">اَللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ تَوَكَّلْتُ وَ عَلَى رِزْقِكَ أَفْطَرْتُ</p>
                    <p class="latin">Allohumma laka sumtu va bika amantu va a'layka tavakkaltu va a'la rizqika aftartu, fag'firli ya g'offaru ma qoddamtu va ma axxortu.</p>
                </div>
            </div>
        `;
        calendar.appendChild(dayElement);
    });
});
