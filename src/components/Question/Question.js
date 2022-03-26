import "./Question.css";

function Question() {
    return (
        <div className="question">
            <div className="que-box">
                <h1>How React Works?</h1>
                <p>
                    React is a JavaScript library for building user interfaces.
                    With the help of react, we can make user interfaces in a
                    predictable and efficient way using declarative code. We use
                    declarative code to create components, which is how we
                    display information. Components are reusable user interfaces
                    which allow you to split the app into separate blocks that
                    act independently of each other. Components accept an
                    arbitrary input with data which is called props and return a
                    React element to declare what should appear on screen. They
                    can interact with other components via props to create a
                    complex user interface. With the help of state, we can
                    update data in a component. React have a virtual dom that
                    replicates a real dom. React track interactions in virtual
                    dom and only updates specific part, without whole user
                    interface reload.
                </p>
            </div>
            <div className="que-box">
                <h1>Difference Between Props And State.</h1>
                <h2>Props</h2>
                <ul>
                    <li>
                        With props you can pass data from one component to
                        another component;
                    </li>
                    <li>
                        We can use props in state and functional components or
                        class component.
                    </li>
                    <li>
                        Props are immutable. We can not change the props value.
                    </li>
                </ul>

                <h2>State</h2>
                <ul>
                    <li>
                        With state we can pass data within the component only.
                    </li>
                    <li>
                        We can use state in functional component or class
                        component.
                    </li>
                    <li>State are mutable. We can change the state value.</li>
                </ul>
            </div>
        </div>
    );
}

export default Question;
