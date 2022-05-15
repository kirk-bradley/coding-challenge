# Solution Explanation

I accomplished this coding challenge with the use of HTML, CSS, and JavaScript. No frontend framework was used in this solution.

I started by creating a \<nav> element that contained the six tab items. I used an unordered list to structure the tab items and turned this \<ul> element into a flex box so that I can arrange the tag items in horizontal alignment. As for the horizontally scrolling grayish background highlight when the mouse pointer is hovering over the tab items, I used an overlay that has a z-index of -1 to set it behind the tab item.
  
To make the overlay move when the mouse pointer hovers over the tab item, I bound event listeners to each tab item that listens for a “<strong>mouseover</strong>” and “<strong>mouseout</strong>” event. For the “<strong>mouseover</strong>” event, I used the “<strong>Element.getBoundingClientRect( )</strong>” DOM method in order to get the exact location of each tab item. The location data that I needed were the left position, top position, height, and width of each tab item. These data are then given to the overlay so that it has the same exact position as the tab item. Finally, we add a class called “hover-active” to the overlay in order to change its opacity from 0 to 1, and thus making it visible.
  
As for the “mouseout”, I simply removed the “hover-active” from the classList of the tab item whenever the mouse pointer stops hovering over the tab item.
  
Finally, I also added ‘click’ events for each tab item so that whenever they are clicked the text gets a white color and a 2px solid white bottom-border appears from underneath the tab item. So I did this by first looping through all the tab items and clearing any font color and bottom-border property values they might have. After that, I assigned a white font color to the tab item and the 2px solid white bottom-border to the currently clicked tab item.
  
As an additional detail, I initially gave the “Overview” tab a white font color and 2px solid white bottom-border as the default styling when the page is loaded.
