var express = require('express');
var router = express.Router();
const Skill = require('../app/Models/skills')

/* CREATE skill */
router.post('/skill-post', async (req, res) => {
  const skill = new Skill ({
    skillName: req.body.skillName,
    percentage: req.body.percentage
  });
  try {
    const newSkill = await skill.save()
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

/* GET skill listing. */
router.get('/', async (req, res, next) => {
  try {
    const skill = await Skill.find();
    res.json(skill);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

/* GET specific skill. */
router.get('/:id', getSkill, function(req, res, next) {
  res.send(res.skill);
});

/* UPDATE skill */
router.patch('/skill-update/:id', getSkill, async (req, res) => {
  if (req.body.skillName != null) {
    res.skill.skillName = req.body.skillName;
  }
  if (req.body.percentage != null) {
    res.skill.percentage = req.body.percentage;
  }
  try {
    const updatedSkill = await res.skill.save();
    res.json(updatedSkill);
  } catch (error) {
    res.status(400).json({message: error.message})
  } 
}); 

/* DELETE skill */
router.delete('/skill-delete/:id', getSkill, async (req, res) => {
  try {
    await res.skill.deleteOne(); // Pake deleteOne, bukan remove atau delete
    res.json({message: "Skill succesfully deleted."})
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

async function getSkill(req, res, next){
  let skill
  try {
    skill = await Skill.findById(req.params.id)
    if (skill == null) {
      return res.status(404).json({message: "Skill not found."});
    }
  } catch (error) {
    return res.status(500).json({message: error.message});
  }

  res.skill = skill
  next();
}

module.exports = router;
