import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  
  fetchComments = async () => {
    if (this.props.asin) {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjN2IwMWZkZWUzZDAwMTU5YmRlZjgiLCJpYXQiOjE3MjQ2NzY4NjUsImV4cCI6MTcyNTg4NjQ2NX0.OnWKaApxKcI6Ro144As_C3vXAlNdljjDcXsiQq-UvcA',
            },
          }
        )

        if (response.ok) {
          const comments = await response.json()
          this.setState({ comments, isLoading: false, isError: false })
        } else {
          this.setState({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.error('Error fetching comments:', error)
        this.setState({ isLoading: false, isError: true })
      }
    }
  }

 
  componentDidMount() {
    this.fetchComments()
  }

  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments()
    }
  }
  

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    )
  }
}

export default CommentArea

