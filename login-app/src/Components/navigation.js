//Below inports React to this specific file
import React from "react";

//Below creates a new component that will be stored in React.
//This navigation component has a main header and five different links.
export default class Navigation extends React.Component {
    render() {
        return(
            <div className="menu" >
                <div className="menu navigation-menu"align="center">
                  <h4  align="left">
                  <text>Web Page Directory</text>
                  </h4>                        
                    
                    <a href="https://www.google.com/search?q=cat+&sca_esv=583077499&bih=723&biw=758&rlz=1C1SQJL_enUS887US897&hl=en-US&ei=eHVWZYyONcC90PEPk-6w2Ak&ved=0ahUKEwiMqu6PqMmCAxXAHjQIHRM3DJsQ4dUDCBA&uact=5&oq=cat+&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIgRjYXQgMgcQABiKBRhDMgcQABiKBRhDMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgsQABiABBixAxjJAzIOEAAYgAQYsQMYgwEYiwMyCBAAGIAEGIsDMhcQLhiABBiSAxjHARivARiLAximAxioAzIIEAAYgAQYsQNIzAtQwAVYwAVwAngBkAEAmAFtoAFtqgEDMC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp">Link1</a>
                        
                    <a href="https://www.google.com/search?q=dog&sca_esv=583077499&bih=723&biw=758&rlz=1C1SQJL_enUS887US897&hl=en-US&ei=fHVWZa_-FMbg0PEPsaKpqAk&ved=0ahUKEwivrMKRqMmCAxVGMDQIHTFRCpUQ4dUDCBA&uact=5&oq=dog&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIgNkb2cyChAuGLEDGIoFGEMyChAAGIoFGLEDGEMyCxAAGIoFGJIDGIsDMgsQABiKBRiSAxiLAzIIEAAYgAQYiwMyCxAAGIAEGMkDGIsDMgcQABiKBRhDMgcQABiKBRhDMggQLhiABBixAzILEAAYgAQYsQMYgwEyGRAuGLEDGIoFGEMYlwUY3AQY3gQY3wTYAQNI4xlQ9AtY9RRwAngBkAEAmAF3oAHAAqoBAzEuMrgBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABhHGNYEGMkDGLADwgILEAAYigUYkgMYsAPCAgoQABiKBRiwAxhDwgIOEAAY5AIY1gQYsAPYAQHCAhAQLhiKBRjIAxiwAxhD2AECwgIHEC4YigUYQ8ICDhAuGIAEGLEDGMcBGNEDwgILEC4YigUYsQMYgwHCAgUQABiABMICERAuGIAEGLEDGIMBGMcBGNEDwgIWEC4YigUYQxiXBRjcBBjeBBjfBNgBA-IDBBgAIEGIBgGQBhO6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBQ&sclient=gws-wiz-serp">Link2</a>
                        
                    <a href="https://www.google.com/search?q=goldfish&sca_esv=583077499&bih=723&biw=758&rlz=1C1SQJL_enUS887US897&hl=en-US&ei=tXVWZb-XArW_0PEPxf6qkAQ&ved=0ahUKEwj_xcasqMmCAxW1HzQIHUW_CkIQ4dUDCBA&uact=5&oq=goldfish&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGdvbGRmaXNoMhAQLhiKBRixAxiDARjUAhhDMgcQABiKBRhDMgoQABiKBRixAxhDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIIEC4YgAQYsQMyERAuGIAEGLEDGIMBGMcBGK8BMgUQABiABDIfEC4YigUYsQMYgwEY1AIYQxiXBRjcBBjeBBjfBNgBBUi3Q1DJClidPXADeAGQAQCYAfcBoAHKCKoBBTMuNC4xuAEDyAEA-AEBqAIUwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAg4QABjkAhjWBBiwA9gBAcICEBAuGIoFGMgDGLADGEPYAQLCAhAQLhiKBRjqAhi0AhhD2AEDwgIQEAAYigUY6gIYtAIYQ9gBA8ICFhAuGAMYjwEY5QIY6gIYtAIYjAPYAQTCAhYQABgDGI8BGOUCGOoCGLQCGIwD2AEEwgIHEC4YigUYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAg0QLhiKBRjHARjRAxhDwgINEAAYigUYsQMYgwEYQ8ICCxAAGIAEGLEDGIMBwgIWEC4YigUYQxiXBRjcBBjeBBjfBNgBBcICChAuGLEDGIoFGEPCAgoQLhiKBRjUAhhDwgIZEC4YsQMYigUYQxiXBRjcBBjeBBjfBNgBBeIDBBgAIEGIBgGQBhO6BgYIARABGAm6BgYIAhABGAi6BgQIAxgHugYGCAQQARgKugYGCAUQARgU&sclient=gws-wiz-serp">Link3</a>
                        
                    <a href="https://www.google.com/search?q=teacup+pig&sca_esv=583077499&bih=723&biw=758&rlz=1C1SQJL_enUS887US897&hl=en-US&ei=5nVWZa_wK9_h0PEP07u8wAs&ved=0ahUKEwiv-57EqMmCAxXfMDQIHdMdD7gQ4dUDCBA&uact=5&oq=teacup+pig&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIgp0ZWFjdXAgcGlnMgsQABiKBRixAxiRAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjkRFD9GljsQHADeAGQAQCYAcEBoAGZCqoBAzIuOLgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIOEAAY5AIY1gQYsAPYAQHCAhAQLhiKBRjIAxiwAxhD2AECwgIHEC4YigUYQ8ICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiABBjHARjRA8ICCxAuGIAEGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAhYQLhiKBRhDGJcFGNwEGN4EGN8E2AEDwgIHEAAYigUYQ8ICDRAuGIoFGLEDGIMBGEPCAg0QABiKBRiRAhhGGPsBwgIIEAAYigUYkQLCAgUQLhiABMICERAuGIoFGLEDGIMBGMcBGNEDwgIIEAAYgAQYsQPCAggQABiKBRixA8ICCBAuGIAEGLEDwgIIEAAYgAQYiwPCAg4QABiABBixAxiDARiLA-IDBBgAIEGIBgGQBhO6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBQ&sclient=gws-wiz-serp">Link4</a>
                        
                    <a href="https://www.google.com/search?q=hamster&sca_esv=583077499&bih=723&biw=758&rlz=1C1SQJL_enUS887US897&hl=en-US&ei=vHZWZbeHLYW70PEP5vir6AY&ved=0ahUKEwi31aWqqcmCAxWFHTQIHWb8Cm0Q4dUDCBA&uact=5&oq=hamster&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2hhbXN0ZXIyChAAGIoFGLEDGEMyDRAuGIMBGLEDGIoFGEMyChAAGIoFGLEDGEMyDRAAGIoFGLEDGIMBGEMyChAAGIoFGLEDGEMyChAAGIoFGLEDGEMyBxAAGIoFGEMyBxAAGIoFGEMyBxAAGIoFGEMyChAAGIoFGLEDGENIuhdQsg9Ysg9wBXgBkAEAmAGeAaABngGqAQMwLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgIKEAAYigUYsAMYQ8ICDhAAGOQCGNYEGLAD2AEBwgIQEC4YigUYyAMYsAMYQ9gBAuIDBBgAIEGIBgGQBhO6BgYIARABGAm6BgYIAhABGAg&sclient=gws-wiz-serp">Link5</a>
                </div>
            </div>
        );
    }
}
