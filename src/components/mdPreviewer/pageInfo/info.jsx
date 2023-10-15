
export default function InfoMdPreviewer(){

    return(
        <div className="desc-item">
            <h2><a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer" rel="noreferrer" target="_blank">Project Requirements</a></h2>
            <div>
                <p><strong>Objective:</strong> Build an app that is functionally similar to this: <a href="https://markdown-previewer.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://markdown-previewer.freecodecamp.rocks/</a>.</p>
                <p>Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.</p>
                <p>You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!</p>
                <p><strong>User Story #1:</strong> I can see a <code>textarea</code> element with a corresponding <code>id=&quot;editor&quot;</code>.</p>
                <p><strong>User Story #2:</strong> I can see an element with a corresponding <code>id=&quot;preview&quot;</code>.</p>
                <p><strong>User Story #3:</strong> When I enter text into the <code>#editor</code> element, the <code>#preview</code> element is updated as I type to display the content of the textarea.</p>
                <p><strong>User Story #4:</strong> When I enter GitHub flavored markdown into the <code>#editor</code> element, the text is rendered as HTML in the <code>#preview</code> element as I type (HINT: You don&apos;t need to parse Markdown yourself - you can import the Marked library for this: <a href="https://cdnjs.com/libraries/marked">https://cdnjs.com/libraries/marked</a>).</p>
                <p><strong>User Story #5:</strong> When my markdown previewer first loads, the default text in the <code>#editor</code> field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.</p>
                <p><strong>User Story #6:</strong> When my markdown previewer first loads, the default markdown in the <code>#editor</code> field should be rendered as HTML in the <code>#preview</code> element.</p>
                <p><strong>Optional Bonus (you do not need to make this test pass):</strong> My markdown previewer interprets carriage returns and renders them as <code>br</code> (line break) elements.</p>
                <p>You can build your project by <a href="https://codepen.io/pen?template=MJjpwO" target="_blank" rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking <code>Save</code> to create your own pen. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code></p>
                <p>Once you&apos;re done, submit the URL to your working project with all its tests passing.</p>
            </div>
        </div>
    )
}