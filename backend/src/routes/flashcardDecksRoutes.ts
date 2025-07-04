import express from 'express';
import {
  getDecks,
  addDeck,
  updateDeck,
  deleteDeck
} from '../controllers/flashcards/flashcardDecksController';

import paginationMiddleware from '../middlewares/pagination';
import { authenticateUser } from '../middlewares/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * /api/flashcard-decks:
 *   get:
 *     summary: Get all flashcard decks
 *     tags: [FlashcardDecks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of flashcard decks
 */
router.get('/', authenticateUser, paginationMiddleware, getDecks);

/**
 * @swagger
 * /api/flashcard-decks:
 *   post:
 *     summary: Create a new flashcard deck
 *     tags: [FlashcardDecks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddDeckRequestBody'
 *     responses:
 *       201:
 *         description: Flashcard deck created
 */
router.post('/', authenticateUser, addDeck);

/**
 * @swagger
 * /api/flashcard-decks/add:
 *   post:
 *     summary: Add a new flashcard deck
 *     tags: [FlashcardDecks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddDeckRequestBody'
 *     responses:
 *       201:
 *         description: Flashcard deck created
 */
router.post('/add', authenticateUser, addDeck);

/**
 * @swagger
 * /api/flashcard-decks/update:
 *   patch:
 *     summary: Update a flashcard deck
 *     tags: [FlashcardDecks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateDeckRequestBody'
 *     responses:
 *       200:
 *         description: Flashcard deck updated
 */
router.patch('/update/:id', authenticateUser, updateDeck);

/**
 * @swagger
 * /api/flashcard-decks/:id:
 *   put:
 *     summary: Update a flashcard deck
 *     tags: [FlashcardDecks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateDeckRequestBody'
 *     responses:
 *       200:
 *         description: Flashcard deck updated
 */
router.put('/:id', authenticateUser, updateDeck);

/**
 * @swagger
 * /api/flashcard-decks/delete:
 *   delete:
 *     summary: Delete a flashcard deck
 *     tags: [FlashcardDecks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeleteDeckRequestBody'
 *     responses:
 *       200:
 *         description: Flashcard deck deleted
 */
router.delete('/delete/:id', authenticateUser, deleteDeck);

/**
 * @swagger
 * /api/flashcard-decks/:id:
 *   delete:
 *     summary: Delete a flashcard deck
 *     tags: [FlashcardDecks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Flashcard deck deleted
 */
router.delete('/:id', authenticateUser, deleteDeck);

export default router;
