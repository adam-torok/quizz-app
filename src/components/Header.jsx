import logo from '../assets/quiz-logo.png';

export default function Header(){
	return (
		<header>
			<img src={logo} alt='quizzLogo' />
			<h1>ReactQuizz</h1>
		</header>
	);
}
