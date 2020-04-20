import React, {Component} from 'react'

class UsersFavouriteMovie extends Component {
	render (){
    	return <ul class='users-favourite-movies-list'>
          {this.props.profiles.map((profile) => (
          	<li>{`${this.props.users[profile.userID].name}'s favorite movie is ${this.props.movies[profile.favoriteMovieID].name}.`}</li>
          ))}
        </ul>
    }
}

export default UsersFavouriteMovie