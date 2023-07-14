import Notes from './Notes';

export const Home = (props) => {
    const {showAlert} = props // destructuring

    return (
        <div> 
            <Notes showAlert={showAlert}/>
        </div>
    )
}
