

function Page({pagename}) {
    function renderpage () {
        switch (pagename) {
          case "about":
          return <h1>About</h1>;
          case "projects":
            return <h1>Projects</h1> 
          case "contact":
          return <h1>Contact</h1>;
          case "resume":
            return <h1>Resume</h1>
          case "resources":
            return <h1>Resources</h1>
        }
      }
    return(<>
        {renderpage()}
        </>
    )   
}

export default Page;