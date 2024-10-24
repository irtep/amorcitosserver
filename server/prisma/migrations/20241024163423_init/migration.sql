-- CreateTable
CREATE TABLE `credentials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `page` VARCHAR(100) NOT NULL,
    `username` VARCHAR(300) NOT NULL,
    `password` VARCHAR(300) NOT NULL,
    `userId` VARCHAR(100) NOT NULL,

    INDEX `fk_credentials_user`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(100) NOT NULL,
    `username` VARCHAR(300) NOT NULL,
    `password` VARCHAR(300) NOT NULL,
    `admin` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `credentials` ADD CONSTRAINT `fk_credentials_user` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
