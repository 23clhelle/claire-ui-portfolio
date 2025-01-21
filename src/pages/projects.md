---
title: Projects
slug: /projects
---

# Projects
## StreamStats
<p class="indented-paragraph">

### Design Narrative
SteamStats. A helpful website that connects to users’ streaming services to provide usage and cost statistics. I decided to create this interface because I am a very logical person who loves to work with numbers. Streaming services stuck out to me because there has been a strong switch from cable to streaming applications. However, with time, the savings that streaming services originally provided have faded. Prices have increased for these subscriptions, and many people choose to buy more than one service so that they can access a larger library of shows. As a Data Science major, I was excited to incorporate visuals of the data collected. I'm also a very logical person, so in combination with major, I knew a logical interface would be perfect for me to design.

To determine if this was actually an interface that people desired, I interviewed a couple of subjects on their feelings toward their streaming services. What I found was that people have MANY frustrations with the methods they use to watch TV. My two interviewees had at least five subscriptions at the time of the interview and they were overwhelmed with trying to keep track of all of them. Another thing I found was that for families with young children, it would be helpful to track how much television they are watching. 

After these initial interviews, I knew StreamStats would be a beneficial resource for many families. I chose to create StreamStats as a website interface designed for computers. The main reason I went with a computer is because, typically, when people are budgeting, they are using a laptop. Also, a larger screen size would work better since I would need a lot of pixels to display some visuals.

To help me create StreamStats, I created a story about a hypothetical user. This story inspired the design choices I made throughout the creation of StreamStats. 

Mary, is a 43-year-old mother with 3 kids (19)(15)(12) and a husband. Each kid is at a different point in school: college, high school, and middle school. Mary has worked in health care her entire adult life, over 20 years. Since she is also on the school’s PTA board, Mary has very little free time. Mary is essentially responsible for running the entire household because her husband has to leave on work trips a lot. Mary doesn’t have much free time, but when she does, she loves to spend it with her family. They like to have a movie night every Friday, where they all pile into the living room and watch a movie. On other nights of the week, after a long day, Mary likes to watch an episode or two of her favorite comfort show.  

Mary needs to see what streaming services her household has been using. It’s important for her to cut costs where possible, especially since her family has so many different streaming services. Sometimes, Mary will forget about a service she has been paying for for months. StreamStats allows Mary to keep track of her expenses and usage when it comes to television.

Finally, I came up with some values that I wanted for the website. I chose clarity and consistency as my two main values. Clarity is important for my UI because the goal of my interface is to make a busy user’s life easier. Thinking back to Mary, she doesn't have extra time to try to decipher my interface. Consistency is important for my UI because, like clarity, I don’t want to cause any confusion for my users. By having a consistent format throughout the different pages of my interface, users can easily understand what page they are on and what the consistent buttons do.

So, when it was time to actually begin designing, I started with some sketches. These are the original ideas I had come up with for the main screens that users would find beneficial. 

### Sketches
<img src={require('/static/img/Sketches1.png').default}/> 
<img src={require('/static/img/Sketches2.png').default}/> 

From the beginning of my electronic mockups, I knew that I wanted StreamStats to follow a green color scheme. When I think of budgeting, I think of money, and what better way to create that connection than by making the website the color of American money (since this will be launched in the US). So, when it came time to make my first draft mockups, they looked fairly similar to my sketches but with better color and design. But before I could create the Figma version of my interface, I had to develop a design system. Some of the hardest decisions to make were choosing the best colors for the theme and what font family would be used. I ended up selecting lighter and darker shades of green for a monochromatic look, and then I chose the Roboto font because it is simple and sans-serif. I wanted a sans-serif font specifically, because it allows the interface to be more accessible. I also chose to add a drop shadow to all of my buttons because I thought it was a great signifier to tell the user that it was a clickable button. That is how I ended up with my design system: 

### Design System
<iframe 
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
          width="800" 
          height="450" 
          src="https://embed.figma.com/design/FGe9WsZmnnLnajvzW2KdYq/SSS?node-id=0-1&embed-host=share" 
          allowFullScreen
        ></iframe>

### Mockups
<iframe 
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800" 
          height="450" 
          src="https://embed.figma.com/design/FGe9WsZmnnLnajvzW2KdYq/SSS?node-id=32-125&embed-host=share" allowfullscreen
        ></iframe>

When the original prototype is opened in preview mode, it starts on the log-in screen. Users can then click the log-in button to navigate to the home page. From the home page, there are two options: users can select the usage button and navigate to the usage page, or they can select the cost button and navigate to the cost page. From either of those pages, users can simply click the logo in the top left corner to get back to the home page. 

After I finished this prototype, I performed some user tests to get feedback. The first test was with one of my classmates. To navigate through a user test, I first had her examine the Figma prototype however she desired. Then, I gave her some background and asked her to perform a task: 
<p class="indented-paragraph">You need to spend a little less money on your streaming services. However, you don’t just want to cancel a random subscription. Can you please determine what streaming service would make the most sense to remove from your account?</p>
I took notes throughout the entire process and found that there were some important changes I needed to make. There was a lot of uncertainty about what different things meant, and there wasn’t enough information provided. This was a major flaw because one of the main values of the interface is clarity. So, I made all of the changes that I discovered during the test and got this new prototype:

### First Prototype
<iframe 
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800" 
          height="450" 
          src="https://embed.figma.com/design/FGe9WsZmnnLnajvzW2KdYq/SSS?node-id=73-74&embed-host=share" allowfullscreen>
          </iframe>

Now that I had an improved version, I was ready to perform more user tests. The next tests I performed followed the same format as the test I did in class, but this time, I used my original interviewees for it. Throughout the two separate tests, I found ten different struggles users had when navigating the interface. However, this time, I did not make changes to fix everything. When it came to clarity problems, I did make the changes because, once again, that was one of the main values, but I did not make changes to functionality. Specifically, both users wanted to type in the text input boxes, but due to the nature of the prototype, I didn’t feel that this was a necessary change to make. After these tests were complete, these were the main changes I made: the usage chart to clearly show the current month’s usage, The cost chart to appear on a separate page for enhanced visualization, and back arrows on pages to make navigation even easier. This left me with the following prototype: 

### Second Prototype
<iframe 
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800" 
          height="450" 
          src="https://embed.figma.com/design/FGe9WsZmnnLnajvzW2KdYq/StreamStats?node-id=112-74&embed-host=share" allowfullscreen>
          </iframe>

Finally, I got feedback from my professor and classmates on my prototype. Just like my user tests, my teacher went through and explored the website and followed a task. I collected a lot of feedback throughout the process, including some from my classmates. One of the main changes I needed to make was consistency in button formatting. Again, consistency is one of the values I had for my interface, so, I felt it was very important to make those changes. I also learned that I needed more information about the purpose of the website throughout. The largest change I made was adding a weekly breakdown view for the cost. This wasn’t the first time a user desired this, so I felt as though it would have a large enough impact for it to be worth it. So, I made the changes that I felt were necessary and ended up with this final prototype: 

### Final Prototype
<iframe 
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}width="800" 
          height="450" 
          src="https://embed.figma.com/design/FGe9WsZmnnLnajvzW2KdYq/SSS?node-id=149-66&embed-host=share" allowfullscreen>
          </iframe>

This final version of StreamStats is much improved from the original version. Not only is the purpose clearer, but it also portrays the intended values much better. For clarity, I used obvious signifiers and text explanations on each page to make the purpose obvious. I also used a clear hierarchy of typography to make the level of importance of each piece of information clear. Again, I used different colors and shadows on buttons to show that they are clickable objects. For consistency, I used the same monochromatic color scheme across the entire website so that users wouldn’t think that have navigated to a new website (such as one of their streaming services). I also kept the site’s logo in the top left corner so that when users click it they are always brought to the home page. I also ensured the font family was the same throughout the website to provide a clear, clean look.
</p>