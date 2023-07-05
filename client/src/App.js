import React from 'react';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={apiResponse: []}
    }
    callAPI(){
        fetch("/api")
            .then(res => res.json())
            .then(res => this.setState({apiResponse: res}))
              
    }
    componentDidMount()
    {
        this.callAPI();
    }
    render() {
        return (
            <div className="App">
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <body>
                
                {(typeof(this.state.apiResponse.users) === "undefined")?(
                    <p>Loading...</p>
                ):(
                    this.state.apiResponse.users.map((user,i)=>(
                        <p key={i}>{user}</p>
                    ))
                )}
            </body>
            </div>
        );
    }
}
export default App;
