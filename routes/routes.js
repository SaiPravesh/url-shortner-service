const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const Url = require('../models/Urls');

/**
 * @route       POST /api/url/shorten
 * @description Create short URL
 */
router.post('/api/url/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = process.env.baseUrl || config.get('baseUrl');

    // Check base URL
    if (!validUrl.isUri(baseUrl)) {
        return res.status(400).json('Invalid base URL');
    }

    // Create URL code
    const urlCode = shortid.generate();

    // Check long URL
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });
            if (url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date(),
                });
                await url.save();
                res.json(url);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json('Server error');
        }
    } else {
        res.status(400).json('Invalid long URL');
    }
});

/**
 * @route       GET /:code
 * @description Redirect to long or original URL
 */
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });

        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No URL found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error');
    }
});

/**
 * @route       GET /api/url/view-url
 * @description Gets all short active short codes
 */
router.get('/api/url/view-url', async (req, res) => {
    try {
        const codes = await Url.find();
        res.json(codes);
    } catch (error) {
        console.error(error);
        res.status(500).json('Server error');
    }
});

module.exports = router;
