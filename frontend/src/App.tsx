import './App.css'

const bandNames = [
  {
    name: 'Dire Straits', 
    members: 'Mark Knopfler, David Knopfler, John Illsley, Pick WIthers', 
    formed: 1977
  },
  {
    name: 'R.E.M.', 
    members: 'Michael Stipe, Peter Buck, Mike Mills, Bill Berry', 
    formed: 1980
  },
  {
    name: 'Collective Soul', 
    members: 'Ed Roland, Dean Roland, David Neal, Ross Childress, Shane Evans', 
    formed: 1982
  },
  {
    name: 'Traffic',
    members: 'Steve Winwood, Jim Capaldi, Chris Wood, Dave Mason',
    formed: 1967
  }
];

function Welcome(){
  return <h1>Criminally Underrated Bands</h1>;
};

function Band({name, members, formed}: {name: string; members: string; formed: number}){

  return(
    <>
      <img />
      <h2>{name}</h2>
      <h2>Original Members: {members}</h2>
      <h2>Formed: {formed}</h2>
    </>
  );
};

function BandList(){

  return(
    // <> is a react fragment
    <>
      {
        bandNames.map((singleBand) => (
          <Band {...singleBand} />
        ))
      }
    </>
  );
};

function App() {

  return (
    <>
      <Welcome />
      <BandList />
    </>
  )
};

export default App
