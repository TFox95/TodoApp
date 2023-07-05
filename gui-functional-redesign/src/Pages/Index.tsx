import * as React from "react";
import { handleLearnButtonScroll } from "../Utils/indexUtils";

import ideas from "../Assets/undraw_ideas_re_7twj.svg";
import ideation from "../Assets/undraw_ideation_re_8i2h.svg";
import thought_process from "../Assets/undraw_thought_process_re_om58.svg";
import in_sync from "../Assets/undraw_in_sync_re_jlqd.svg";
import HighlightCard from "../Components/indexComp/HighlightCard";

const Index = (): React.ReactNode => {


    return (
        <>
            <div className="hero">
                <section className={"hero-container"}>
                    <div className={"hero-content"}>
                        <h1>INDUSTRY LEADING</h1>
                        <h2>TECHNOLOGY</h2>
                        <p>
                            Aestriks is the perfect tool to help you capture your ideas, prioritize your tasks,
                            and manage your time effectively. Here are some of the key reasons why you should
                            use Aestriks Below.
                        </p>
                    </div>
                    <div className={"hero-btn"} onClick={handleLearnButtonScroll}>
                        <button> Learn now</button>
                    </div>
                </section>
            </div>
            <main className="main">
                <section className="main-container">
                    <HighlightCard styles={["main-content", "side-grid-width"]}
                        block={"main-content-block"}
                        header={"Improved Productivity"}
                        content={'Aestriks helps you to be more productive by keeping track of all your tasks and deadlines in one place. You can prioritize your tasks and create reminders ensure that you dont miss any important deadlines.'}
                        sourceType={"main-img"}
                        source={ideas}
                    />
                    <HighlightCard styles={["main-content"]}
                        block={"main-content-block"}
                        header={"Ease of Use"}
                        content={"Designed with the user in mind, ensuring that the interface is easy to navigate and that every function is accessible with minimal effort. Additionally, the app's clean and modern design creates a pleasant user experience."}
                        sourceType={"main-img"}
                        source={ideation}
                    />
                    <HighlightCard styles={["main-content", "side-grid-width"]}
                        block={"main-content-block"}
                        header={"Prioritize Effectively"}
                        content={"Aestriks lets you prioritize your tasks based on importance, deadlines, and other criteria. This makes it easy to focus on the most critical tasks and ensure that they get done on time. While also making it easy to remember that there are lower priority tasks that are also due any time soon."}
                        sourceType={"main-img"}
                        source={thought_process}
                    />
                </section>
            </main>
            <div className={"info"}>
                <section className={"info-container"}>
                    <HighlightCard styles={["info-content"]}
                        block={"info-content-block"}
                        header={"Always within grasp"}
                        content={"Keep your tasks on you no matter where're you at; Phone, tablet and computer, Everything you add to your Dashboard is avaiable across all of your devices so your important stuff is always with you."}
                        disclaimerStyle={"always-disclaimer"}
                        disclaimer={"Syncing across your devices requires internet connection. "}
                        sourceType={"info-image"}
                        source={in_sync}

                    />
                </section>
            </div>
        </>
    )
};

export default Index;