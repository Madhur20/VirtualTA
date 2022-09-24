import HomePage from '../components/homePage';
import WelcomeAppBar from '../components/welcome';
import Form from '../components/Form';

export default function Home() {
  
  return (
    <div className='main'>
      <WelcomeAppBar/>
      <Form />
      {/* <HomePage sx={{zIndex:0}}/> */}
      
    </div>
  )
}
