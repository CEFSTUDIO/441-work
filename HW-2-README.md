<style>
.boxStyle {
    float: center;
    width: 440px;
    background: LawnGreen;
    font-family: "Times New Roman";
    height: 260px;
    line-height: 80px;
    display: inline-block;
} 
</style>
<h2><u>Homework 2 Read Me Response</u></h2>
<p>Surprisingly difficult. The worst trouble I had was learning all the neccessary JavaScript to do it. I spent a good amount of time
looking over in class examples and outside resources in an effort to get it to work. I knew exactly how to do it in Java but doing it
in JavaScript was similar but different enough to take time. Once I got the timer working and got it to happen in 5 seconds- it was then
a challenge on how to get it to do something after those 5 seconds ended. I used an onload script that would make changes to the inner HTML
via their ID after 5 seconds occured- knowing it always occur then made it plausible to do it this way.</p> 

<p>Figuring out how to change the inner HTML took some trial and error and a lot of testing. I could get it to change the background of the
entire document but not the background of just the box. That took awhile to figure out. The thing that took the most obscene amount of time
was formatting. I was shocked how hard it was to just get two lines to be centered vertically in a box. I spent hours trying to get it to work
and then learned the best way to do it was using line-height. I set the line-height so it appeared the two were centered. So the "Countdown
Timer" and "Time Left- 20" headings looked centered. However, when it switched to a single line of "Countdown Done!" it looked wrong. So I
had to have the script also change the line-height after 5 seconds so both appeared right. This took about 2/3rds of the time it took to
complete the assignment. I spent 3 or 4 hours doing this. I didn't anticipate it to take this long. I thinking having a background in HTML,
CSS, and Java helped but I definitely need more time with JavaScript.</p>

<p>The box itself was easy- it was mostly formatting. The code itself for the timer wasn't too difficult. I just didn't expect to struggle
so much with centering two lines of text vertically in a box. If I take anything away from this assignment- I can at the very least do that.
I can vertically center two lines of text in a box. Small victories.</p>

 <div id= "divID", class="boxStyle">
     <h1 id= "cdt">Countdown Timer</h1>
     <h1 id="cdt2">Time Left - #</span></h1>
</div>
