
export default function Info25_5Clock(){

    return(
        <div className="desc-item">
            <h2><a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-25--5-clock" rel="noreferrer" target="_blank">Project Requirements</a></h2>
            <div>
                <p><strong>Note:</strong> <strong>React 18 has known incompatibilities with the tests for this project (see <a href="https://github.com/freeCodeCamp/freeCodeCamp/issues/45922">issue</a>)</strong></p>
                <p><strong>Objective:</strong> Build an app that is functionally similar to this: <a href="https://25--5-clock.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://25--5-clock.freecodecamp.rocks</a>.</p>
                <p>Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.</p>
                <p>You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!</p>
                <p><strong>User Story #1:</strong> I can see an element with <code>id=&quot;break-label&quot;</code> that contains a string (e.g. &quot;Break Length&quot;).</p>
                <p><strong>User Story #2:</strong> I can see an element with <code>id=&quot;session-label&quot;</code> that contains a string (e.g. &quot;Session Length&quot;).</p>
                <p><strong>User Story #3:</strong> I can see two clickable elements with corresponding IDs: <code>id=&quot;break-decrement&quot;</code> and <code>id=&quot;session-decrement&quot;</code>.</p>
                <p><strong>User Story #4:</strong> I can see two clickable elements with corresponding IDs: <code>id=&quot;break-increment&quot;</code> and <code>id=&quot;session-increment&quot;</code>.</p>
                <p><strong>User Story #5:</strong> I can see an element with a corresponding <code>id=&quot;break-length&quot;</code>, which by default (on load) displays a value of 5.</p>
                <p><strong>User Story #6:</strong> I can see an element with a corresponding <code>id=&quot;session-length&quot;</code>, which by default displays a value of 25.</p>
                <p><strong>User Story #7:</strong> I can see an element with a corresponding <code>id=&quot;timer-label&quot;</code>, that contains a string indicating a session is initialized (e.g. &quot;Session&quot;).</p>
                <p><strong>User Story #8:</strong> I can see an element with corresponding <code>id=&quot;time-left&quot;</code>. NOTE: Paused or running, the value in this field should always be displayed in <code>mm:ss</code> format (i.e. 25:00).</p>
                <p><strong>User Story #9:</strong> I can see a clickable element with a corresponding <code>id=&quot;start_stop&quot;</code>.</p>
                <p><strong>User Story #10:</strong> I can see a clickable element with a corresponding <code>id=&quot;reset&quot;</code>.</p>
                <p><strong>User Story #11:</strong> When I click the element with the id of <code>reset</code>, any running timer should be stopped, the value within <code>id=&quot;break-length&quot;</code> should return to <code>5</code>, the value within <code>id=&quot;session-length&quot;</code> should return to 25, and the element with <code>id=&quot;time-left&quot;</code> should reset to its default state.</p>
                <p><strong>User Story #12:</strong> When I click the element with the id of <code>break-decrement</code>, the value within <code>id=&quot;break-length&quot;</code> decrements by a value of 1, and I can see the updated value.</p>
                <p><strong>User Story #13:</strong> When I click the element with the id of <code>break-increment</code>, the value within <code>id=&quot;break-length&quot;</code> increments by a value of 1, and I can see the updated value.</p>
                <p><strong>User Story #14:</strong> When I click the element with the id of <code>session-decrement</code>, the value within <code>id=&quot;session-length&quot;</code> decrements by a value of 1, and I can see the updated value.</p>
                <p><strong>User Story #15:</strong> When I click the element with the id of <code>session-increment</code>, the value within <code>id=&quot;session-length&quot;</code> increments by a value of 1, and I can see the updated value.</p>
                <p><strong>User Story #16:</strong> I should not be able to set a session or break length to &lt;= 0.</p>
                <p><strong>User Story #17:</strong> I should not be able to set a session or break length to &gt; 60.</p>
                <p><strong>User Story #18:</strong> When I first click the element with <code>id=&quot;start_stop&quot;</code>, the timer should begin running from the value currently displayed in <code>id=&quot;session-length&quot;</code>, even if the value has been incremented or decremented from the original value of 25.</p>
                <p><strong>User Story #19:</strong> If the timer is running, the element with the id of <code>time-left</code> should display the remaining time in <code>mm:ss</code> format (decrementing by a value of 1 and updating the display every 1000ms).</p>
                <p><strong>User Story #20:</strong> If the timer is running and I click the element with <code>id=&quot;start_stop&quot;</code>, the countdown should pause.</p>
                <p><strong>User Story #21:</strong> If the timer is paused and I click the element with <code>id=&quot;start_stop&quot;</code>, the countdown should resume running from the point at which it was paused.</p>
                <p><strong>User Story #22:</strong> When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of <code>timer-label</code> should display a string indicating a break has begun.</p>
                <p><strong>User Story #23:</strong> When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the <code>id=&quot;break-length&quot;</code> element.</p>
                <p><strong>User Story #24:</strong> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of <code>timer-label</code> should display a string indicating a session has begun.</p>
                <p><strong>User Story #25:</strong> When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the <code>id=&quot;session-length&quot;</code> element.</p>
                <p><strong>User Story #26:</strong> When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 <code>audio</code> tag and have a corresponding <code>id=&quot;beep&quot;</code>.</p>
                <p><strong>User Story #27:</strong> The audio element with <code>id=&quot;beep&quot;</code> must be 1 second or longer.</p>
                <p><strong>User Story #28:</strong> The audio element with id of <code>beep</code> must stop playing and be rewound to the beginning when the element with the id of <code>reset</code> is clicked.</p>
                <p>You can build your project by <a href="https://codepen.io/pen?template=MJjpwO" target="_blank" rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking <code>Save</code> to create your own pen. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code></p>
                <p>Once you&apos;re done, submit the URL to your working project with all its tests passing.</p>
            </div>
        </div>
    )
}