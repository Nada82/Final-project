import React from 'react'
import { Link , Route, Switch} from 'react-router-dom';
import AddComment from "./Components/AddComment"
import Commentlist from "./Components/Commentlist"

const artData = [
  {
    id: 1,
    name: 'Instagram Trends of 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
    status:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    status1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
   {
    id: 2,
    name: 'Blogging for Beginners',
    description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.'
  
  },
  {
    id: 3,
    name: 'Newsletters: The Revolution',
    description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.'
  },
  {
    id: 4,
    name: 'Build Your Online Presence with Twitter',
    description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.'
  },
  
  ];

function ArticleCard({match}) {
 
  var linkList = artData.map( (data) => {
     return(
       <div>
          <div  className="article-container">
              <Link to={`${match.url}/${data.name}`} className="head1">
                {data.name}
              </Link>
              <i> <p className="para"> {data.description} </p> </i>
              </div>
        </div>
            )
      
  })
    
     return(
            <div>
                <div className="article"> {linkList} </div>
        <Switch>
                <Route path={`${match.url}/:artDataname`}
      render={() => {
        return (
        <div className="jumbotron">
          {artData.map((data) => {
          return (
            <div>
             
     <p className="content">{data.status} </p>
      <p className="content">{data.status1} </p>
      
            </div>
          );
        }
        )}     
     
              <AddComment/>
              <Commentlist/>
            </div>             );      
          }}/>
         </Switch>
       
            </div>
          )
          
        }
    
    export default ArticleCard;
    