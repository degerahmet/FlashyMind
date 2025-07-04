import { Router } from 'express';
import { createFlashcard, getFlashcards, getFlashcardsByDeckId, deleteFlashcard, updateFlashcard } from '../controllers/flashcards/flashcardsController';
import { authenticateUser } from '../middlewares/authMiddleware';

const router = Router();
/**
 * @swagger
 * /api/flashcards:
 *   get:
 *     summary: Get all flashcards
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of flashcards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flashcard'
 *   post:
 *     summary: Create a new flashcard
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flashcard'
 *     responses:
 *       201:
 *         description: Flashcard created
 * 
 * /api/flashcards/{id}:
 *   delete:
 *     summary: Delete a flashcard
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Flashcard deleted
 *   put:
 *     summary: Update a flashcard
 *     tags: [Flashcards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flashcard'
 *     responses:
 *       200:
 *         description: Flashcard updated
 */

router.get('/', authenticateUser, getFlashcards);
router.get('/:deck_id', authenticateUser, getFlashcardsByDeckId);
router.post('/add', authenticateUser, createFlashcard);
router.put('/:id', authenticateUser, updateFlashcard);
router.delete('/:id', authenticateUser, deleteFlashcard);

export default router;  
