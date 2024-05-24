import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// LinkedIn Auth
router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// Microsoft Auth
router.get('/microsoft', passport.authenticate('microsoft'));

router.get('/microsoft/callback',
  passport.authenticate('microsoft', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

export { router as authController };
