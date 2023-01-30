import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import  { Container, HeaderAppBar, Header, Wrapper, Logo, Link, ToolbarStyled } from './SharedLayout.styled';
import { MdLocalMovies } from 'react-icons/md';
import { Loader } from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';

// export const SharedLayout = () => {
//   const { isLoggedIn, email } = useAuth();
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch(logOut());
//   };
//   return (
//     <Container>
//       <Header>
//         <Link to="/start">
//           <Wrapper>
//             <MdLocalMovies size="30" />
//             <Logo>TMDB </Logo>
//           </Wrapper>
//         </Link>

//         <nav>
          
//           {isLoggedIn ? (
//             <>
//               {' '}
//               <Link to="/home" end>
//                 Home
//               </Link>
//               <Link to="/movies">Movies</Link>
//               <p>User: {email}</p>
//               <button type="button" onClick={handleClick}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               {' '}
//               <Link to="/register">Register</Link>
//               <Link to="/login">Login</Link>
//             </>
//           )}
//         </nav>
//       </Header>


//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>

//       <Toaster position="bottom-left" reverseOrder={false} />
//     </Container>
//   );
// };
import { AppBar, Button, CssBaseline, Toolbar, useScrollTrigger } from '@mui/material';



function HideAppBar(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <>
      <CssBaseline />
      
      <AppBar style={{ display: trigger ? 'none' : 'block' }}>
        <ToolbarStyled>
           {children}
        </ToolbarStyled>
       
      </AppBar>
    </>
  );
}

export const SharedLayout = () => {
  const { isLoggedIn, email } = useAuth();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <HideAppBar>
        {/* <Header> */}
          <Link to="/start">
            <Wrapper>
              <MdLocalMovies size="30" />
              <Logo>TMDB </Logo>
            </Wrapper>
          </Link>

        
            {isLoggedIn ? (
              <Wrapper>
                {' '}
                <Link to="/home" end>
                  Home
                </Link>
                <Link to="/movies">Movies</Link>
                <p>User: {email}</p>
                <Button onClick={handleClick} type="button" variant="contained"> Logout</Button>
              
              </Wrapper>
            ) : (
              <Wrapper>
                {' '}
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </Wrapper>
            )}
        
        {/* </Header> */}
      </HideAppBar>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Toaster position="bottom-left" reverseOrder={false} />
   </Container>
   );
 };