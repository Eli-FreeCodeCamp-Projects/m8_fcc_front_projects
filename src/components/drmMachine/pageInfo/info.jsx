
export default function InfoDrumMachine(){

    return(
        <div className="desc-item">
            <h2><a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine" rel="noreferrer" target="_blank">Project Requirements</a></h2>
            <div>

                <p><strong>Note:</strong> <strong>React 18 has known incompatibilities with the tests for this project (see <a href="https://github.com/freeCodeCamp/freeCodeCamp/issues/45922">issue</a>)</strong></p>
                <p><strong>Objective:</strong> Build an app that is functionally similar to this: <a href="https://drum-machine.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://drum-machine.freecodecamp.rocks/</a>.</p>
                <p>Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.</p>
                <p>You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!</p>
                <p><strong>User Story #1:</strong> I should be able to see an outer container with a corresponding <code>id=&quot;drum-machine&quot;</code> that contains all other elements.</p>
                <p><strong>User Story #2:</strong> Within <code>#drum-machine</code> I can see an element with a corresponding <code>id=&quot;display&quot;</code>.</p>
                <p><strong>User Story #3:</strong> Within <code>#drum-machine</code> I can see 9 clickable drum pad elements, each with a class name of <code>drum-pad</code>, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: <code>Q</code>, <code>W</code>, <code>E</code>, <code>A</code>, <code>S</code>, <code>D</code>, <code>Z</code>, <code>X</code>, <code>C</code>. The drum pads MUST be in this order.</p>
                <p><strong>User Story #4:</strong> Within each <code>.drum-pad</code>, there should be an HTML5 <code>audio</code> element which has a <code>src</code> attribute pointing to an audio clip, a class name of <code>clip</code>, and an id corresponding to the inner text of its parent <code>.drum-pad</code> (e.g. <code>id=&quot;Q&quot;</code>, <code>id=&quot;W&quot;</code>, <code>id=&quot;E&quot;</code> etc.).</p>
                <p><strong>User Story #5:</strong> When I click on a <code>.drum-pad</code> element, the audio clip contained in its child <code>audio</code> element should be triggered.</p>
                <p><strong>User Story #6:</strong> When I press the trigger key associated with each <code>.drum-pad</code>, the audio clip contained in its child <code>audio</code> element should be triggered (e.g. pressing the <code>Q</code> key should trigger the drum pad which contains the string <code>Q</code>, pressing the <code>W</code> key should trigger the drum pad which contains the string <code>W</code>, etc.).</p>
                <p><strong>User Story #7:</strong> When a <code>.drum-pad</code> is triggered, a string describing the associated audio clip is displayed as the inner text of the <code>#display</code> element (each string must be unique).</p>
                <p>Here are some audio samples you can use for your drum machine:</p>
                <ul>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3">Heater 1</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3">Heater 2</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3">Heater 3</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3">Heater 4</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3">Clap</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3">Open-HH</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3">Kick-n&apos;-Hat</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3">Kick</a></li>
                    <li><a href="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3">Closed-HH</a></li>
                </ul>
                <p>You can build your project by <a href="https://codepen.io/pen?template=MJjpwO" target="_blank" rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking <code>Save</code> to create your own pen. Or you can use this CDN link to run the tests in any environment you like: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code></p>
                <p>Once you&apos;re done, submit the URL to your working project with all its tests passing.</p>

            </div>
        </div>
    )
}