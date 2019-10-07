select create_db_user('ayu', 'password');

INSERT into organisation (name, db_user, uuid, parent_organisation_id)
values ('Ayu', 'ayu', '461e440c-ffee-4efd-8b3f-46082f334a4a', null);
