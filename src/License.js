/*
  This file contains the License component, helper functions
  The License page contains the license which is made of the MIT license text and Agriculture Informatics license
*/

import { Grid, Typography } from "@mui/material";
import React from "react";

const License = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="body1">
          This is free software; all of the software, documentation, and data
          files and their contents, is licensed under the terms of MIT License,
          with the exception of the copyright protected cover crop images. You
          may use, copy, modify and redistribute all files included in this
          distribution, individually or in aggregate, subject to the terms and
          conditions of the MIT license.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="body1">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the “Software”), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions: The above
              copyright notice and this permission notice shall be included in
              all copies or substantial portions of the Software.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default License;
