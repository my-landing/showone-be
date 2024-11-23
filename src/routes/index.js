import express from 'express';
const router = express.Router();

import upload from '../services/upload.js';
router.get('/test', (req, res) => {
    res.send('This is an example route!');
})

router.post('/upload', upload.single('file'), (req, res) => {
   res.json(req.file)
})
export default router;
