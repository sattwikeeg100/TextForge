import React from 'react'

export default function About(props) {

/*     const [myStyle,setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'                       
    }) 
*/
    let myStyle = {
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'#3a2a70':'white', 
        border: '0.5px solid',
    }
    document.title="TextForge - About";
    return (
    <>
        <h2 className='my-3' style={{color: props.mode ==='dark'?'white':'black'}}>About Us</h2>

        <div className="accordion" id="aboutAccordion">

            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Welcome to TextForge - Transforming Text, Simplifying Life!</strong>
                </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                At TextForge, we believe that the power of words goes beyond mere communication; it has the ability to shape thoughts, convey emotions, and influence change. Our mission is to empower users with a suite of simple yet powerful text manipulation tools, designed to enhance your digital experience and streamline your interactions with text.<br /><br />
                TextForge is not just a website; it's your go-to companion for all things text-related. Whether you're a writer, a student, a professional, or just someone who loves playing with words, TextForge is here to make your life easier and your text more vibrant.
                </div>
                </div>
                
            </div>

            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>The Toolbox: Your Gateway to Textual Transformations</strong>
                </button>
                </h2>

                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>We understand the importance of knowing your text intimately, from its structure to its impact. Here are some of the insightful features that make TextForge your ultimate companion in text exploration: <br/><br/>
                1) Transform Case: Elevate your text's appearance with a seamless toggle between uppercase and lowercase, allowing you to mold your words to fit any context or style effortlessly. <br/><br/>
                2) Remove Extra Spaces: Bid farewell to the chaos of excessive spaces. Our tool ensures that your text is clean, precise, and presentation-ready. <br/><br/>
                3) Copy & Paste: Streamline your workflow with our user-friendly copy and paste functionality. Text manipulation has never been this smooth. <br/><br/>
                4) Clear Text: Need a fresh start? Our 'Clear Text' feature wipes the slate clean, offering you a blank canvas for your next literary endeavor. <br/><br/>
                5) Word and Character Count: Ever wondered about the length of your document or the density of your prose? TextForge provides real-time word and character counts, offering you a quick and accurate assessment of your text's size and complexity. <br/><br/>
                6) Reading Time in 'Minutes Read': With TextForge, get a dynamic estimate of how long it takes to read your text. Perfect for gauging the readability of your content and optimizing it for your audience. <br/><br/>
                7) Text Preview(A glimpse of your presentation): TextForge offers a text preview, allowing you to catch a glimpse of how your text will appear before finalizing any transformations. Ensure that your formatting is on point and that your message is delivered with the intended impact. <br/><br/><br/>
                Explore the nuances of your writing, understand its dimensions, and present your ideas with precision using these intuitive features. At TextForge, every tool is crafted to elevate your text experience, providing a holistic platform for both creation and analysis.</p>
                </div>
                </div>
            </div>

            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <strong>Privacy Assurance: Your Words, Your Space</strong>
                </button>
                </h2>

                <div id="collapseFour" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                At TextForge, we prioritize your privacy. Rest assured, your text data remains your own. Our platform processes and manipulates your text directly on your device, ensuring that sensitive information never leaves your control. We do not store or access your content, respecting the confidentiality of your words. No user data is collected, tracked, or shared. Our commitment to privacy extends to every feature, safeguarding your creative expressions in a secure digital environment. TextForge is designed to empower you while respecting the sanctity of your personal information, fostering a trustworthy space for all your text-related needs.
                </div>
                </div>
            </div>

            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <strong>Future Horizons: The Evolution of TextForge</strong>
                </button>
                </h2>

                <div id="collapseFive" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                As technology evolves, so does TextForge. We envision a future where our platform continues to adapt and grow, introducing new features and innovations that cater to the ever-changing landscape of digital communication. Your feedback shapes our journey, and we're committed to continually refining and expanding TextForge to meet your evolving needs.
                </div>
                </div>
            </div>

            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                <strong>Conclusion: Transforming Text, Transforming Lives</strong>
                </button>
                </h2>

                <div id="collapseSix" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                In the sprawling landscape of digital tools, TextForge stands tall as a beacon for those who seek to transform their text with ease and precision: it's for students, educators, and anyone on the quest for textual excellence. Join us in this journey of textual exploration, where each click is a brushstroke, and every word is a masterpiece waiting to be unveiled. TextForge isn't just a platform; it's a celebration of language, a testament to the infinite possibilities that words bring.<br/><br/>
                <i>Ready to embark on your textual adventure? Dive into the world of TextForge, where words come to life!</i>
                </div>
                </div>
            </div>
        </div>


    </>
 )
}

