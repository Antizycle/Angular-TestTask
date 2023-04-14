#This a Test Task#

Angular with Font-Awesome  

Each button press changes the Icon above the button to random one from the "Free-regular-svg-icons" library with a delay of 3 seconds.
Any consecutive press within this 3 seconds interval would change the Icon again in a sequence.

Button press is emitted to the parent component (Output, EventEmitter) where it would be handled.
Upon changing Icon would be passed down to the Content-icon component to be displayed (Input)