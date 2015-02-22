BloodType = {
  
  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {
  
  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   * 
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   * 
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   * 
   */

  receive_patient : function (blood_inventory, patient) {
    
    // give a random blood type to anyone
    // very bad idea!
    // return [
    //   BloodType.AB_POS,
    //   BloodType.AB_NEG,
    //   BloodType.A_POS,
    //   BloodType.A_NEG
    // ][Math.floor(Math.random()*4)];
    var AB_POS = BloodType.AB_POS;
    var AB_NEG = BloodType.AB_NEG;
    var A_NEG = BloodType.A_NEG;
    var A_POS = BloodType.A_POS;
    var B_NEG = BloodType.B_NEG;
    var B_POS = BloodType.B_POS;
    var O_NEG = BloodType.O_NEG;
    var O_POS = BloodType.O_POS;
    var bank = blood_inventory;

    if(patient.blood_type == AB_POS){
      if(bank[AB_NEG] > 3 || bank[AB_NEG] > 3 || bank[B_NEG] > 3 || bank[O_NEG] > 3){
        return [
        A_POS,
        AB_POS,
        B_POS,
        O_POS][Math.floor(Math.random()*4)];
      }
      return[ 
        AB_NEG,
        A_NEG,
        B_NEG,
        O_NEG
        ][Math.floor(Math.random()*3)];

    }
    if(patient.blood_type == AB_NEG){
      return[ 
        AB_NEG,
        A_NEG,
        B_NEG,
        O_NEG
        ][Math.floor(Math.random()*4)];
    }
    if(patient.blood_type == B_POS){
      if(bank[AB_NEG] > 3 || bank[AB_NEG] > 3 || bank[B_NEG] > 3 || bank[O_NEG] > 3){
        return [
        B_POS,
        O_POS][Math.floor(Math.random()*2)];
      }
      return [
        O_NEG,
        B_NEG
        ][Math.floor(Math.random()*2)];
    }
    if(patient.blood_type == B_NEG){
      return[ 
        B_NEG,
        O_NEG
        ][Math.floor(Math.random()*2)];
    }
    if(patient.blood_type == A_POS){
      if(bank[AB_NEG] > 3 || bank[AB_NEG] > 3 || bank[B_NEG] > 3 || bank[O_NEG] > 3){
        return [
        A_POS,
        O_POS][Math.floor(Math.random()*2)];
      }
      return[ 
        A_NEG,
        O_NEG
        ][Math.floor(Math.random()*2)];

    }
    if(patient.blood_type == A_NEG){
      return[
      O_NEG,
      A_NEG][Math.floor(Math.random()*2)];
    }
    if (patient.blood_type == O_NEG){
      return O_NEG;
    }
    if (patient.blood_type == O_POS){
      if(bank[AB_NEG] > 3 || bank[AB_NEG] > 3 || bank[B_NEG] > 3 || bank[O_NEG] > 3){
        return O_POS;
      }
      return O_NEG;
    }

  }

};