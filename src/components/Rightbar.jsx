import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography, } from "@mui/material";
import React from "react";
import n2 from '../images/Posts/n3.jpg'
import n4 from '../images/Posts/n2.jpg'
import n6 from '../images/Posts/n1.jpg'
import av1 from '../images/Persons/p1.jpg'
import av2 from '../images/Persons/p2.jpg'
import av3 from '../images/Persons/p3.jpg'
import av4 from '../images/Persons/p4.jpg'
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Person"
            src={av1}
          />
          <Avatar
            alt="Person"
            src={av2}
          />
          <Avatar
            alt="Person"
            src={av3}
          />
          <Avatar alt="User Person" src="" />
          <Avatar
            alt="Person"
            src={av4}
          />
          <Avatar
            alt="Person"
            src={av3}
          />
          <Avatar
          alt="Person"
          src={av1}
          />
          <Avatar
          alt="Person"
          src={av4}
          />
          <Avatar
            alt="Person"
            src={av2}
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src={n2}
              alt="Natural"
            />
          </ImageListItem>
          <ImageListItem>
            <img
            src={n4}
            alt="Natural"
            />
          </ImageListItem>
          <ImageListItem>
            <img
            src={n6}
            alt="Natural"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Sara" src={av1} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sara Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Sandra Mo" src={av3} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Monica" src={av2} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
