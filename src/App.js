import './styles/App.css';
//import Header from "./components/Header";
function App() {
  return (
    <div className="App">
		<header>
			<div className="header-wrap">
				<div className="title-logo"></div>
			</div>
		</header>
		<div className="contents-wrap">
			<div className="article-wrap">
				<div className="writer-wrap">
					<div className="writer-image"></div>
					<div className="writer-name">
						<p className="name">elizabeth gilmore</p>
					</div>
				</div>
				<div className="photo-wrap">
					<div className="photo"></div>
				</div>
				<div className="button-wrap">
					<input type="checkbox" id="likeCheck" />
					<label for="likeCheck"></label>
					<input type="checkbox" id="commentCheck" />
					<label for="commentCheck"></label>
				</div>
				<div className="description-wrap">
					<p className="description"><b>elzabeth glimore:</b> 우리 우정 영원히...</p>
				</div>
			</div>
			<div className="comments-wrap hide">
				<form id="commentForm">
					<input type="text" id="inputName" name="name" placeholder="이름" />
					<input type="text" id="inputComment" name="comment" placeholder="내용" />
					<button id="sendComment"></button>
				</form>
				{/* <div className="comment-wrap">
					<div className="profile-image"></div>
					<div className="name">도우너:</div>
					<div className="comment">hello</div>
					<div className="date"></div>
				</div> */}
			</div>
		</div>
    </div>
  );
}

export default App;
