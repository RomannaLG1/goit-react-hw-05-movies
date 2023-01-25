// import { Slide, useScrollTrigger } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger ({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }



// export default function HideAppBar(props) {
//   return (
//    <>
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar>
//           <Toolbar>
//             <Typography variant="h6" component="div">
//               Scroll to hide App bar
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar />

//    </>
//   );
// }