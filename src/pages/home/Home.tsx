import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useGetAPIDataQuery } from "../../slices/sampleAPISlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { toggleMode } from "../../slices/preferenceSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LoadingElement from "../../components/LoadingElement";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLightMode = useAppSelector((state) => state.preference.isLightMode);

  const {
    data: apiData,
    isLoading: isAPIDataLoading,
    isError: isAPIDataError,
    error: APIDataError,
  } = useGetAPIDataQuery({});

  // const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        padding: 2,
      }}
    >
      <IconButton onClick={() => dispatch(toggleMode({}))}>
        {isLightMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>

      <LoadingElement
        isLoading={isAPIDataLoading}
        component={
          <Typography>
            {isAPIDataError ? JSON.stringify(APIDataError) : apiData}
          </Typography>
        }
      />
    </Box>
  );
};

export default Home;
