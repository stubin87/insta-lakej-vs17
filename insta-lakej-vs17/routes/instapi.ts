﻿import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send("Instagram API test resource");
});

export default router;