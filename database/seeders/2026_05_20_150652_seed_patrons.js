import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Patrons) {
    await db.Patrons.bulkCreate([
      
    ]);
  }else {
    await QueryInterface.bulkInsert('patrons', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('patrons');
}

export { up, down }
