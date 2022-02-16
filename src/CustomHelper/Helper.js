export const userSynchronizeRuleCheck = function data(synchronize_id, userSynchronizeData) {
    // console.log(synchronize_id);
    return userSynchronizeData.includes(synchronize_id);;
}