-- AlterTable
ALTER TABLE `MailForms` MODIFY `type` VARCHAR(191),
    MODIFY `contents` TEXT,
    MODIFY `header_image` VARCHAR(191),
    MODIFY `map_image` VARCHAR(191),
    MODIFY `createdAt` DATETIME(3),
    MODIFY `updatedAt` DATETIME(3);
