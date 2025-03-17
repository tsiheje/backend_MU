const { v4: uuidv4 } = require('uuid');
const db = require('../models/init-models');

/**
 * Crée une nouvelle coopérative
 * @param {Object} req - Objet requête Express
 * @param {Object} res - Objet réponse Express
 * @returns {Object} Réponse standardisée
 */
const createCooperative = async (req, res) => {
  try {
    const { cooperative_name, cooperative_address, cooperative_email, cooperative_phone } = req.body;
    
    const newCooperative = await db.Cooperatives.create({
      id: uuidv4(),
      cooperative_name,
      cooperative_address,
      cooperative_email,
      cooperative_phone,
      creation_date: Date.now(),
    });

    return res.status(201).json({
      success: true,
      message: 'Coopérative créée avec succès',
      data: newCooperative,
      timestamp: new Date()
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la création de la coopérative',
      error: error.message,
      timestamp: new Date()
    });
  }
};

/**
 * Récupère toutes les coopératives
 * @param {Object} req - Objet requête Express
 * @param {Object} res - Objet réponse Express
 * @returns {Object} Réponse standardisée
 */
const getAllCooperatives = async (req, res) => {
  try {
    const cooperatives = await db.Cooperatives.findAll();
    
    return res.status(200).json({
      success: true,
      message: 'Coopératives récupérées avec succès',
      count: cooperatives.length,
      data: cooperatives,
      timestamp: new Date()
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération des coopératives',
      error: error.message,
      timestamp: new Date()
    });
  }
};

/**
 * Récupère une coopérative par son ID
 * @param {Object} req - Objet requête Express
 * @param {Object} res - Objet réponse Express
 * @returns {Object} Réponse standardisée
 */
const getCooperativeById = async (req, res) => {
  try {
    const { id } = req.params;
    const cooperative = await db.Cooperatives.findByPk(id);

    if (!cooperative) {
      return res.status(404).json({
        success: false,
        message: 'Coopérative non trouvée',
        timestamp: new Date()
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Coopérative récupérée avec succès',
      data: cooperative,
      timestamp: new Date()
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la récupération de la coopérative',
      error: error.message,
      timestamp: new Date()
    });
  }
};

/**
 * Met à jour une coopérative existante
 * @param {Object} req - Objet requête Express
 * @param {Object} res - Objet réponse Express
 * @returns {Object} Réponse standardisée
 */
const updateCooperative = async (req, res) => {
  try {
    const { id } = req.params;
    const { cooperative_name, cooperative_address, cooperative_email, cooperative_phone, creation_date } = req.body;

    const cooperative = await db.Cooperatives.findByPk(id);
    if (!cooperative) {
      return res.status(404).json({
        success: false,
        message: 'Coopérative non trouvée',
        timestamp: new Date()
      });
    }

    await cooperative.update({
      cooperative_name,
      cooperative_address,
      cooperative_email,
      cooperative_phone,
      creation_date
    });

    return res.status(200).json({
      success: true,
      message: 'Coopérative mise à jour avec succès',
      data: cooperative,
      timestamp: new Date()
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la mise à jour de la coopérative',
      error: error.message,
      timestamp: new Date()
    });
  }
};

/**
 * Supprime une coopérative
 * @param {Object} req - Objet requête Express
 * @param {Object} res - Objet réponse Express
 * @returns {Object} Réponse standardisée
 */
const deleteCooperative = async (req, res) => {
  try {
    const { id } = req.params;
    const cooperative = await db.Cooperatives.findByPk(id);

    if (!cooperative) {
      return res.status(404).json({
        success: false,
        message: 'Coopérative non trouvée',
        timestamp: new Date()
      });
    }

    await cooperative.destroy();
    
    return res.status(200).json({
      success: true,
      message: 'Coopérative supprimée avec succès',
      timestamp: new Date()
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la suppression de la coopérative',
      error: error.message,
      timestamp: new Date()
    });
  }
};

module.exports = {
  createCooperative,
  getAllCooperatives,
  getCooperativeById,
  updateCooperative,
  deleteCooperative
};