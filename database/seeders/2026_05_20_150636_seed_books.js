import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Books) {
    await db.Books.bulkCreate([
      
    ]);
  }else {
    await QueryInterface.bulkInsert('books', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('books');
}

export { up, down }
