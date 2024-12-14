/**
 * known bugs:
 * 
 * - iz4context.tsx:77 
        
        
       GET http://localhost:5509/api/credentials 401 (Unauthorized) (JWT token fail)
       this should lead to auto log out, now, it just leads to infinited loading icon.
       temporary go-around for this is delete user in localStorage
 * 
 * for development:
 * - admin tools for admin users for iz4
 * gives possibility to resert psw for user (username, new password) and 
 * create new user: username, password, admin true of false
 * see list of users and can delete, active or passive
 * header could be full width
 * - when clicked "show icon", should scroll to up
 * - mobile support
 * - enhance security measures
 */