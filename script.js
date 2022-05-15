const tabItems = document.querySelectorAll('.tab-item');
const overlay = document.querySelector('.overlay');
const overviewTab = document.querySelector('nav ul li');
const overviewTabText = document.querySelector('nav ul li div');

// We set the default tab sellected, which is the "Overview" tab.
overviewTabText.style.color = '#fff';  
overviewTab.style.borderBottom = '2px solid white';

// The code block below deals with the grayish background highlight that scrolls horizontally when the mouse pointer hovers over the tabs. It also deals with the event when a tab item is clicked.
tabItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        const tabItemPosition = item.getBoundingClientRect(); // this returns an object that describes the exact position and size of the tab item.
        overlay.style.left = `${tabItemPosition.x}px`; // this places the overlay at the exact position as our tab item.
        overlay.style.top = `${tabItemPosition.y}px`;
        overlay.style.height = `${tabItemPosition.height}px`;
        overlay.style.width = `${tabItemPosition.width}px`;
        overlay.classList.add('hover-active');  // this makes the overlay visible when we hover over the tab item.
    });
    item.addEventListener('mouseout', () => {
        overlay.classList.remove('hover-active'); // this hides the overlay when we stop hovering over the tab item.
    });

    // The code below gets executed when a tab item is clicked.
    item.addEventListener('click', () => {
        tabItems.forEach((itemTab) => {
            itemTab.style.color = ''; // clears out any font color property value of the tab item text.
            itemTab.parentElement.style.borderBottom = ''; // clears out any styling on the bottom border of all the <li>'s.
        });
        item.style.color = '#fff'; // assigns a white value to the color property of the tab item text.
        item.parentElement.style.borderBottom = '2px solid white'; // after the tab item <li> bottomBorder property has been cleared out, we then set the currently clicked tab item <li> to have a bottomBorder value as specified.
    });
});


