"use client";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import cl1 from "../../../../public/class1.png"
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
export default function Class() {
  const router = useRouter();
  const [classname, setClassname] = React.useState('');
    const [classnumber, setClassnumber] = React.useState('');
  
    const handleCreate = () =>{
     
    }
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedClassname = localStorage.getItem("classname");
        const storedClassnumber = localStorage.getItem("classnumber");
        if (storedClassname && storedClassnumber) {
          setClassname(JSON.parse(storedClassname));
          setClassnumber(JSON.parse(storedClassnumber));
        }
      }
    }, []);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const projects = [
    { name: "Project 1", url: "https://img.freepik.com/free-photo/people-generating-images-using-artificial-intelligence-laptop_23-2150794334.jpg?t=st=1710251710~exp=1710255310~hmac=0b18455c08ed0ae7910919240ef8786b0412a664f39e0ac9e30584e8c3262fe1&w=740" },
    { name: "Project 2", url: "https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10541.jpg?t=st=1710252174~exp=1710255774~hmac=5dce400ab6a19f1596bd819ad10df08f6aa335a222f545e57d356afc6ba6024b&w=740" },
    { name: "Project 3", url: "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?t=st=1710252429~exp=1710256029~hmac=4150b91e1f40f61675e16e0d974a202899f1fef8cd31cf613aadd6b47d11c171&w=740" },
    { name: "Project 4", url: "https://img.freepik.com/free-vector/happy-students-pupils-watching-study-webinar-isolated-flat-illustration_74855-14070.jpg?t=st=1710252513~exp=1710256113~hmac=e043a78e8104845d08dc4c4f41a5f677332bd26325aca883c2600e7f571a42b7&w=740"},
    { name: "Project 5", url: "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?t=st=1710252429~exp=1710256029~hmac=4150b91e1f40f61675e16e0d974a202899f1fef8cd31cf613aadd6b47d11c171&w=740" },
    { name: "Project 6", url: "https://img.freepik.com/free-vector/happy-students-pupils-watching-study-webinar-isolated-flat-illustration_74855-14070.jpg?t=st=1710252513~exp=1710256113~hmac=e043a78e8104845d08dc4c4f41a5f677332bd26325aca883c2600e7f571a42b7&w=740" },
    { name: "Project 7", url: "https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10541.jpg?t=st=1710252174~exp=1710255774~hmac=5dce400ab6a19f1596bd819ad10df08f6aa335a222f545e57d356afc6ba6024b&w=740" },
    { name: "Project 8", url: "https://img.freepik.com/free-photo/people-generating-images-using-artificial-intelligence-laptop_23-2150794334.jpg?t=st=1710251710~exp=1710255310~hmac=0b18455c08ed0ae7910919240ef8786b0412a664f39e0ac9e30584e8c3262fe1&w=740"},
  ];
  function ProjectCard({ projectName, projectUrl }) {
    // const [projectname, setProjectname] = React.useState(null)
    // const [projecturl, setProjecturl] = React.useState(null)
    const handleprojectclick = () => {
      router.push('/teacher/classroom/projectdetails');
    };

  return (
      <Card sx={{ maxWidth: 345, borderRadius: '15px', '&:hover':{cursor: 'pointer', boxShadow: '0 10px 10px rgba(224, 187, 255, 0.8)'} }} onClick={handleprojectclick}>
        <CardMedia
            component="img"
            height="140"
            image={projectUrl}
            style={{ height: '200px' }}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {projectName}
        </Typography>
        </CardContent>
        </Card>
  );
}

    return (
      <Grid container spacing={4}>
               
      <Grid item xs={12}>
        <a href='/teacher/dashboard'>
      <span class="flex text-sm" >
        <ArrowBackIcon style={{height:'20px'}}/> Dashboard</span>
        </a>
          <div class="flex rounded-md mt-8">
        <Typography variant="h2" component="h2" sx={{fontFamily: 'Montserrat'}}>
            Classroom : {classnumber || classname ? `${classnumber} ${classname}` : "Classroom 1"}
        </Typography>
          </div>
      </Grid>
      <Grid item xs={12}>
          <div class="flex rounded-md mt-8">
          <Typography variant="h5" component="h2" fontWeight="bold" letterSpacing="2px">
              Projects
          </Typography>
          </div>
          <Divider variant="middle" sx={{marginTop:'10px'}}/>
      </Grid> 
      
      <Grid item xs={12}>
     <div class=" pl-4 py-2  rounded-lg flex justify-between space-between shadow-lg" >
          <h4 class="flex font-bold tracking-wider ">
            Create new Project
          </h4>
          {/* <button class="mr-4 bg-discordpurple-300 px-4 rounded-lg font-medium">Create</button> */}
          <Button onClick={handleCreate()}  variant="contained" style={{marginRight:'10px', borderRadius:'15px', backgroundColor:'#692ea3'}}>
            Create 
          <AddCircleOutlineOutlinedIcon  sx={{paddingLeft:'4px', marginLeft:'4px'}}/>
          </Button>
      </div>

      </Grid>
      <Grid item xs={12}>
          <div class="flex rounded-md w-full">
          <Search style={{ display: 'flex', width: '100%', background: 'linear-gradient(to right, white, transparent)', height: '50px', borderRadius: '15px'}}>
              <SearchIconWrapper>
              <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
              placeholder="Search Projects..."
              inputProps={{ 'aria-label': 'search' }}
              style={{background:'transparent', height: '100%', width: 'full', padding: '0', margin: '0', flex: '1' }}
              />
          </Search>
          </div>
      </Grid> 
  
      <Grid style={{position:'relative', marginTop:'3%', width:'100%', marginLeft:'30px'}}>
          <Grid container spacing={3} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProjectCard projectName={project.name} projectUrl={project.url} />
              </Grid>
            ))}
          </Grid>
        </Grid> 
      <Grid item xs={12} sx={{display:'flex', justifyContent: 'center'}}>
          <Pagination count={5}  renderItem={(item) => (
              <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              />
          )}/>
      </Grid>
  </Grid>


  )
}
        