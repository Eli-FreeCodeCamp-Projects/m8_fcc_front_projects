
export default function InfoQuoteMachine(){

    return(
        <div className="desc-item">
            <h2><a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine" rel="noreferrer" target="_blank">Project Requirements</a></h2>
            <div>
                <p><strong>Objective:</strong> Build an app that is functionally similar to this: <a href="https://random-quote-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://random-quote-machine.freecodecamp.rocks/</a>.</p>
                <p>Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.</p>
                <p>You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!</p>
                <p><strong>User Story #1:</strong> I can see a wrapper element with a corresponding <code>id=&quot;quote-box&quot;</code>.</p>
                <p><strong>User Story #2:</strong> Within <code>#quote-box</code>, I can see an element with a corresponding <code>id=&quot;text&quot;</code>.</p>
                <p><strong>User Story #3:</strong> Within <code>#quote-box</code>, I can see an element with a corresponding <code>id=&quot;author&quot;</code>.</p>
                <p><strong>User Story #4:</strong> Within <code>#quote-box</code>, I can see a clickable element with a corresponding <code>id=&quot;new-quote&quot;</code>.</p>
                <p><strong>User Story #5:</strong> Within <code>#quote-box</code>, I can see a clickable <code>a</code> element with a corresponding <code>id=&quot;tweet-quote&quot;</code>.</p>
                <p><strong>User Story #6:</strong> On first load, my quote machine displays a random quote in the element with <code>id=&quot;text&quot;</code>.</p>
                <p><strong>User Story #7:</strong> On first load, my quote machine displays the random quote&apos;s author in the element with <code>id=&quot;author&quot;</code>.</p>
                <p><strong>User Story #8:</strong> When the <code>#new-quote</code> button is clicked, my quote machine should fetch a new quote and display it in the <code>#text</code> element.</p>
                <p><strong>User Story #9:</strong> My quote machine should fetch the new quote&apos;s author when the <code>#new-quote</code> button is clicked and display it in the <code>#author</code> element.</p>
                <p><strong>User Story #10:</strong> I can tweet the current quote by clicking on the <code>#tweet-quote</code> <code>a</code> element. This <code>a</code> element should include the <code>&quot;twitter.com/intent/tweet&quot;</code> path in its <code>href</code> attribute to tweet the current quote.</p>
                <p><strong>User Story #11:</strong> The <code>#quote-box</code> wrapper element should be horizontally centered. Please run tests with browser&apos;s zoom level at 100% and page maximized.</p>
                <p>You can build your project by <a href="https://codepen.io/pen?template=MJjpwO" target="_blank" rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking <code>Save</code> to create your own pen. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code></p>
                <p>Once you&apos;re done, submit the URL to your working project with all its tests passing.</p>
                <p><strong>Note:</strong> Twitter does not allow links to be loaded in an iframe. Try using the <code>target=&quot;_blank&quot;</code> or <code>target=&quot;_top&quot;</code> attribute on the <code>#tweet-quote</code> element if your tweet won&apos;t load. <code>target=&quot;_top&quot;</code> will replace the current tab so make sure your work is saved.</p>

            </div>
        </div>
    )
}