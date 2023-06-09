import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // by changing the value from true to false the return message also changes
            isLoggedIn: true
        }
    }
    render() {

        // * by using short circuit operator
        // in this it only shows the single tab anothe one is    empty  becuase of '&&' operator
        //  return
        //  this.state.isLoggedIn && <div> Welcome User </div>
        // * by using ternary operator 
        return this.state.isLoggedIn ? (
            <div>Welcome User</div>
        ) : (
            <div>Welcome Guest</div>
        )
        // *by using if and else statement and returning the valus as parameters ----
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome User</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
        // *by using "let" keyword ----
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome User</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        //  return <div>{message}</div>

        // *normal method
        // return (
        //     <div>
        //         <div>Welcome User</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting